import json
import os
import psycopg2  # noqa


def handler(event: dict, context) -> dict:
    """Сохранение ответа гостя о присутствии на свадьбе в базу данных."""

    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    body = json.loads(event.get("body") or "{}")
    name = body.get("name", "").strip()
    attending = body.get("attending", "yes")
    guests = int(body.get("guests", 1)) if attending == "yes" else 0
    wishes = body.get("wishes", "").strip()

    conn = psycopg2.connect(os.environ["DATABASE_URL"])
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO rsvp (name, attending, guests, wishes) VALUES (%s, %s, %s, %s)",
        (name, attending, guests, wishes or None),
    )
    conn.commit()
    cur.close()
    conn.close()

    return {
        "statusCode": 200,
        "headers": headers,
        "body": json.dumps({"ok": True}),
    }