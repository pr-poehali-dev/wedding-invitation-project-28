import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка подтверждения от гостя на email организаторов свадьбы."""

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
    guests = body.get("guests", "1")
    wishes = body.get("wishes", "").strip()

    attending_text = "✅ Придёт" if attending == "yes" else "❌ Не придёт"
    guests_text = f"{guests} чел." if attending == "yes" else "—"

    html = f"""
    <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; color: #2c2420;">
      <div style="border-bottom: 1px solid #c9966a; padding-bottom: 16px; margin-bottom: 24px;">
        <h2 style="margin: 0; font-weight: 300; font-style: italic; font-size: 28px; color: #2c2420;">
          Новый ответ гостя
        </h2>
        <p style="margin: 4px 0 0; font-size: 12px; letter-spacing: 0.2em; text-transform: uppercase; color: #9c8878;">
          Свадьба 26 июля 2026
        </p>
      </div>

      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px 0; color: #9c8878; font-size: 13px; width: 140px;">Гость</td>
          <td style="padding: 10px 0; font-size: 16px;">{name}</td>
        </tr>
        <tr style="border-top: 1px solid rgba(201,150,106,0.2);">
          <td style="padding: 10px 0; color: #9c8878; font-size: 13px;">Присутствие</td>
          <td style="padding: 10px 0; font-size: 16px;">{attending_text}</td>
        </tr>
        <tr style="border-top: 1px solid rgba(201,150,106,0.2);">
          <td style="padding: 10px 0; color: #9c8878; font-size: 13px;">Кол-во гостей</td>
          <td style="padding: 10px 0; font-size: 16px;">{guests_text}</td>
        </tr>
        {"" if not wishes else f'''<tr style="border-top: 1px solid rgba(201,150,106,0.2);"><td style="padding: 10px 0; color: #9c8878; font-size: 13px; vertical-align: top;">Пожелания</td><td style="padding: 10px 0; font-size: 16px; font-style: italic;">{wishes}</td></tr>'''}
      </table>
    </div>
    """

    gmail_user = "nasha.svadba.2026@gmail.com"
    gmail_password = os.environ.get("GMAIL_APP_PASSWORD", "")

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"💌 Ответ от гостя: {name}"
    msg["From"] = gmail_user
    msg["To"] = gmail_user
    msg.attach(MIMEText(html, "html"))

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
        server.login(gmail_user, gmail_password)
        server.sendmail(gmail_user, gmail_user, msg.as_string())

    return {
        "statusCode": 200,
        "headers": headers,
        "body": json.dumps({"ok": True}),
    }
