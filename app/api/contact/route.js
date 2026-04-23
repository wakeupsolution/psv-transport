// app/api/contact/route.js
import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Parse the data from the frontend
    const { name, phone, email, segment, cargo } = await request.json();

    // Configure your email provider (Gmail in this case)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Set up the email details
    // Set up the email details
    const mailOptions = {
      from: `"PSV Transport Website" <${process.env.EMAIL_USER}>`, // Gives it a professional name
      to: 'info.psvtransport@gmail.com',
      replyTo: email, // IMPORTANT: This tells Gmail this is a real inquiry from the customer
      subject: `New Quote Request: ${name} - ${segment}`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nSegment: ${segment}\nCargo: ${cargo}`, // Adding plain text helps bypass spam filters
      html: `
        <div style="font-family: sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #1e293b;">New Quote Request via Website</h2>
          <p><strong>Company / Name:</strong> ${name}</p>git branch
          <p><strong>Phone Number:</strong> ${phone}</p>
          <p><strong>Email Address:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Required Fleet Segment:</strong> ${segment}</p>
          <p><strong>Cargo Specifications:</strong></p>
          <p style="background-color: #f8fafc; padding: 15px; border-radius: 5px; border: 1px solid #e2e8f0;">
            ${cargo}
          </p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}