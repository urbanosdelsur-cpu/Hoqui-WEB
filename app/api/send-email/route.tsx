import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json()

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Create email content
    const emailContent = `
      Nueva consulta desde el formulario de contacto de HOQUI Construcciones
      
      Nombre: ${name}
      Email: ${email}
      Teléfono: ${phone}
      
      Mensaje:
      ${message}
    `

    // Send email using fetch to a mail service
    // For now, we'll use a simple mailto approach or you can integrate with services like:
    // - Resend
    // - SendGrid
    // - Nodemailer with SMTP

    // Example with Resend (you'll need to add RESEND_API_KEY to your environment variables)
    const resendApiKey = process.env.RESEND_API_KEY

    if (resendApiKey) {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: "HOQUI Construcciones <onboarding@resend.dev>", // Replace with your verified domain
          to: ["secretaria@hoqui.com.ar"],
          subject: `Nueva consulta de ${name}`,
          text: emailContent,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #333;">Nueva consulta desde el formulario de contacto</h2>
              <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Teléfono:</strong> ${phone}</p>
              </div>
              <div style="margin: 20px 0;">
                <p><strong>Mensaje:</strong></p>
                <p style="white-space: pre-wrap;">${message}</p>
              </div>
            </div>
          `,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to send email")
      }
    } else {
      // Fallback: Log to console if no email service is configured
      console.log("Email would be sent to secretaria@hoqui.com.ar:")
      console.log(emailContent)
    }

    return NextResponse.json({ success: true, message: "Email sent successfully" })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
