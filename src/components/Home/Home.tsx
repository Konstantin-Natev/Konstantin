import { Grid2, Stack, Typography } from "@mui/material";
import styles from "./home.module.css";
import { CustomButton } from "../CustomComponents/CustomButton/CustomButton";

export const Home = ({handleClick} : {handleClick: () => void}) => {

    return (
        <Grid2 className={styles.root}>
            <Stack className={styles.titleSection}>
                <Grid2 className={styles.subheading}>
                    <Grid2 className={styles.headline}></Grid2>
                    <Typography className={styles.subheadingText}>home</Typography>
                </Grid2>
                <Grid2 className={styles.mainTitleSection}>
                    <Typography  className={styles.mainTitle}>Hey, I'm Konstantin Natev</Typography>
                    <Typography className={styles.secondTitle}>I'm a junior full-stack developer with experience in building user-focused web applications. I’ve worked on projects across various industries, using JavaScript, React, Node.js, and databases to deliver digital solutions and solve real-world problems.</Typography>
                </Grid2>
            </Stack>

            <CustomButton text={"GET IN TOUCH"} variant={"outlined"} onClick={handleClick}/>
        </Grid2>
    );
}
