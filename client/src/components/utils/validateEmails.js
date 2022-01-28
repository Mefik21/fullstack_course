export default function validateEmails(emails) {
    const EMAIL_REGEXP =
        /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    const invalidEmails = emails
        .split(',')
        .map((email) => email.trim())
        .filter((email) => EMAIL_REGEXP.test(email) === false);

    if (invalidEmails.length) {
        return `Эти электронные адреса неверные ${invalidEmails}`;
    }

    return
}
