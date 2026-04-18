import json
import os
import psycopg2


def handler(event: dict, context) -> dict:
    """Получение списка всех ответов гостей на свадьбу."""

    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    conn = psycopg2.connect(os.environ["DATABASE_URL"])
    cur = conn.cursor()
    cur.execute(
        "SELECT id, name, attending, guests, wishes, created_at FROM rsvp ORDER BY created_at DESC"
    )
    rows = cur.fetchall()
    cur.close()
    conn.close()

    guests_list = [
        {
            "id": r[0],
            "name": r[1],
            "attending": r[2],
            "guests": r[3],
            "wishes": r[4],
            "created_at": r[5].isoformat() if r[5] else None,
        }
        for r in rows
    ]

    total_coming = sum(r["guests"] for r in guests_list if r["attending"] == "yes")

    return {
        "statusCode": 200,
        "headers": headers,
        "body": json.dumps({"rsvp": guests_list, "total_coming": total_coming}, ensure_ascii=False),
    }
