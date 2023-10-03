"use server";

import React from "react";
import { getErrorMessage, validateString } from "../utils";
import { Resend } from "resend";
import EmailTemplate from "@/components/ui/email/EmailTemplate";
import { emailLength, messageLength } from "../constants";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, emailLength)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, messageLength)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "mousoms2204@gmail.com",
      subject: "Message from Your Portfolio's Contact form",
      reply_to: senderEmail,
      react: React.createElement(EmailTemplate, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};