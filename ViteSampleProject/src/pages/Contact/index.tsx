import { useState } from "react";
import styles from "./Contact.module.css";

const MAX_MESSAGE_LENGTH = 10;
interface ContactFormData {
	fullName: string;
	email: string;
	message: string;
}

type TFieldErrors = Partial<Record<keyof ContactFormData, string>>;

const Contact = () => {
	const [textCount, setTextCount] = useState<number>(0);
	const [fieldErrors, setFieldErrors] = useState<TFieldErrors>({});
    const [success, setSuccess] = useState<boolean>(false);

	const handleSubmitForm = (e: React.SubmitEvent) => {
        setSuccess(false);

		e.preventDefault();
		const data = Object.fromEntries(
			new FormData(e.currentTarget as HTMLFormElement),
		) as unknown as ContactFormData;
		// Collect ALL errors in one pass instead of returning early
		const errors: TFieldErrors = {};

		if (!data.fullName.trim()) {
			errors.fullName = "Full name is required.";
		}

		if (!data.email.trim()) {
			errors.email = "Email is required.";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
			// Only check format if the field isn't empty — avoids redundant errors
			errors.email = "Please enter a valid email address.";
		}

		if (!data.message.trim()) {
			errors.message = "Message is required.";
		} else if (data.message.length > MAX_MESSAGE_LENGTH) {
			errors.message = `Message cannot exceed ${MAX_MESSAGE_LENGTH} characters.`;
		}

		if (Object.keys(errors).length > 0) {
			setFieldErrors(errors);
			return;
		}

        setSuccess(true);
        setFieldErrors({});
	};

	const handleResetForm = () => {
		setTextCount(0);
	};

	return (
		<div className={styles.contact}>
			<h1 className={styles.title}>Contact Me 📞</h1>

			<form
				className={styles.form}
				onSubmit={handleSubmitForm}
				onReset={handleResetForm}
			>
                {success && (
                    <p className={styles.successText}>
                        ✅ Your message has been sent successfully!
                    </p>
                )}

				<section className={styles.field}>
					<label htmlFor="fullName" className={styles.label}>
						Full Name
					</label>
					<input
						type="text"
						id="fullName"
						name="fullName"
						className={styles.input}
					/>
					{fieldErrors.fullName && (
						<p className={styles.errorText}>
							{fieldErrors.fullName}
						</p>
					)}
				</section>

				<section className={styles.field}>
					<label htmlFor="email" className={styles.label}>
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						className={styles.input}
					/>
					{fieldErrors.email && (
						<p className={styles.errorText}>
							{fieldErrors.email}
						</p>
					)}
				</section>

				<section className={styles.field}>
					<label htmlFor="message" className={styles.label}>
						Message
					</label>
					<textarea
						id="message"
						className={styles.textarea}
						rows={5}
						name="message"
						onChange={(e) => setTextCount(e.target.value.length)}
					></textarea>
					<p
						className={styles.charCount}
						style={{
							color:
								textCount > MAX_MESSAGE_LENGTH
									? "red"
									: "inherit",
							fontWeight:
								textCount > MAX_MESSAGE_LENGTH
									? "bold"
									: "normal",
						}}
					>
						Characters {textCount}/{MAX_MESSAGE_LENGTH}
					</p>
					{fieldErrors.message && (
						<p className={styles.errorText}>
							{fieldErrors.message}
						</p>
					)}
				</section>

				<section className={styles.actions}>
					<button type="submit" className={styles.submitBtn}>
						Submit
					</button>
					<button type="reset" className={styles.clearBtn}>
						Clear
					</button>
				</section>
			</form>
		</div>
	);
};

export default Contact;
