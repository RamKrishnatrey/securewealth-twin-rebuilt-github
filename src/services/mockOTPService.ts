export const mockOTPService = {
  // In a real app, this would be stored server-side or in a secure way.
  // For development, we keep a simple map in memory.
  otpStore: new Map<string, string>(),

  /**
   * Generate and store a mock OTP for the given mobile number.
   * @param mobileNumber - The mobile number to send OTP to.
   * @returns The generated OTP (for development only).
   */
  sendOTP(mobileNumber: string): string {
    // Generate a 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    // Store it (in a real app, this would be sent via SMS and stored server-side)
    this.otpStore.set(mobileNumber, otp);
    // In development, log the OTP to the console for visibility.
    console.warn(`[Development Mode] Mock OTP for ${mobileNumber}: ${otp}`);
    return otp;
  },

  /**
   * Verify the OTP for the given mobile number.
   * @param mobileNumber - The mobile number.
   * @param otp - The OTP to verify.
   * @returns True if OTP matches, false otherwise.
   */
  verifyOTP(mobileNumber: string, otp: string): boolean {
    const storedOTP = this.otpStore.get(mobileNumber);
    return storedOTP === otp;
  },

  /**
   * Clear the OTP for the given mobile number (after successful verification).
   * @param mobileNumber - The mobile number.
   */
  clearOTP(mobileNumber: string): void {
    this.otpStore.delete(mobileNumber);
  }
};