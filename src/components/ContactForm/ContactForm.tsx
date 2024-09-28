import { Divider, Grid, Grid2, Stack, TextareaAutosize, TextField, Typography } from "@mui/material";
import styles from "./contact-form.module.css";
import skillsData from '../../data/skills.json';
import socialContactsData from '../../data/social-contacts.json';
import { CustomButton } from "../CustomComponents/CustomButton/CustomButton";
import emailjs from 'emailjs-com';
import { useRef } from "react";

export const ContactForm = () => {
    const form = useRef(null);

    const sendEmail = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        emailjs.sendForm('service_stclons', 'template_0t96lvf', form.current, "heMBs2eh2ICqWQ-gn")
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <Grid2 className={styles.root}>
            <Stack className={styles.titleSection}>
                <Grid2 className={styles.subheading}>
                    <Grid2 className={styles.headline}></Grid2>
                    <Typography className={styles.subheadingText}>get in touch</Typography>
                </Grid2>
                <Grid2 className={styles.mainTitleSection}>
                    <Typography className={styles.mainTitle}>Drop me a line to say hello or talk about opportunities</Typography>
                </Grid2>
            </Stack>

            <Grid container className={styles.contentContainer}>
                <Grid item xs={3} className={styles.skillsAndContactsContainer}>
                    <Stack className={styles.skillsContainer}>
                        <Typography className={styles.subtitle}>Skills</Typography>
                        <Divider className={styles.divider} />
                        <Grid2 className={styles.skillsList}>
                            {skillsData.map((skill, index) => (
                                <Typography key={index} className={styles.skillItem}>{skill}</Typography>
                            ))}
                        </Grid2>
                    </Stack>

                    <Stack className={styles.skillsContainer}>
                        <Typography className={styles.subtitle}>Social Contacts</Typography>
                        <Divider className={styles.divider} />
                        <Stack>
                            {socialContactsData.map((contact, index) => (
                                <a href={contact.url} key={index} className={styles.linkItems}>{contact.text}</a>
                            ))}
                        </Stack>
                    </Stack>
                </Grid>

                <Grid item xs={5} className={styles.formContainer}>
                    <form ref={form} onSubmit={sendEmail}>
                        <Grid2 marginBottom={"40px"}>
                            <Typography className={styles.label}>Name</Typography>
                            <TextField
                                id={"name"}
                                name="name"
                                value={""}
                                onChange={() => {}}
                                className={styles.input}
                                fullWidth
                                InputProps={{
                                    classes: {
                                        notchedOutline: styles.noFocusOutline,
                                    },
                                }}
                            />
                        </Grid2>

                        <Grid2 marginBottom={"40px"}>
                            <Typography className={styles.label}>Email</Typography>
                            <TextField
                                id={"email"}
                                name="email"
                                value={""}
                                onChange={() => {}}
                                className={styles.input}
                                fullWidth
                                InputProps={{
                                    classes: {
                                        notchedOutline: styles.noFocusOutline,
                                    },
                                }}
                            />
                        </Grid2>

                        <Grid2 marginBottom={"20px"}>
                            <Typography className={styles.label}>Message</Typography>
                            <TextareaAutosize
                                id="message"
                                name="message"
                                value={""}
                                onChange={() => {}}
                                className={styles.textarea}
                            />
                        </Grid2>

                        <CustomButton text={"Submit Message"} variant={"outlined"} type="submit" />
                    </form>
                </Grid>
            </Grid>
        </Grid2>
    );
};
