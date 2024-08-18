# otp-generator-by-length

A simple npm package to generate one-time passwords (OTPs) with cryptographic security.

## Overview

The OTP Generator package provides a function to generate one-time passwords of a specified length. It uses Node.js's `crypto` module to ensure cryptographic security, making the generated OTPs suitable for use in secure authentication systems.

## Features

- **Cryptographically Secure**: Uses `crypto.randomBytes` for generating secure, random OTPs.
- **Customizable Length**: Specify the length of the OTP.
- **Simple to Use**: Easy-to-integrate function with minimal configuration.

## Installation

To use this package, you need to have Node.js installed. You can then install the package via npm. 

1. **Install the Package**

   ```bash
   npm install otp-generator-by-length

## Usage

Here’s how to use the generateOTP function from the package:

1. **Import the Function**

    ```bash
    import { generateOTP } from 'otp-generator';

2. **Generate an OTP**

    ```bash
    // Generate a default 6-digit OTP

    const otp = generateOTP();
    console.log(`Your OTP is: ${otp}`);

    // Generate an 8-digit OTP

    const customLengthOtp = generateOTP(8);
    console.log(`Your custom length OTP is: ${customLengthOtp}`);

## License
This project is licensed under the Apache License 2.0 - see the LICENSE file for details.

## Contributing
If you would like to contribute to the project, please fork the repository and submit a pull request. Make sure to follow the coding guidelines and add tests for any new features or bug fixes.

## Contact
For any questions or issues, please open an issue in the repository or contact the maintainers.

