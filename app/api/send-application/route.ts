import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    try {
        const formData = await req.formData()

        const fullName = formData.get('fullName')
        const email = formData.get('email')
        const phone = formData.get('phone')
        const linkedinUrl = formData.get('linkedinUrl')
        const resume = formData.get('resume') as File

        const resumeBuffer = await resume.arrayBuffer()

        await resend.emails.send({
            from: 'onboarding@resend.dev', // change later
            to: 'ishan.aslot.ca@gmail.com',
            subject: `New Application from ${fullName}`,
            html: `
        <h2>New Application</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>LinkedIn:</strong> ${linkedinUrl}</p>
      `,
            attachments: [
                {
                    filename: resume.name,
                    content: Buffer.from(resumeBuffer),
                },
            ],
        })

        return Response.json({ success: true })
    } catch (error) {
        console.error(error)
        return Response.json({ error: 'Failed' }, { status: 500 })
    }
}
