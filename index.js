import crypto from "crypto";

export function generateOTP(length = 6) {
  
  if (length < 1) {
    throw new Error("Length must be a positive integer.");
  }

  const digits = "0123456789";
  let otp = "";
  
  const randomBytes = crypto.randomBytes(length);
  for (let i = 0; i < length; i++) {
    otp += digits.charAt(randomBytes[i] % digits.length);
  }

  return otp;
}
