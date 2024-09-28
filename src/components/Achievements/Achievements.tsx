import { Grid, Grid2, Paper, Stack, Typography } from "@mui/material";
import styles from "./achievements.module.css";
import achievementsData from '../../data/achievements.json';
import Carousel from 'react-material-ui-carousel';
import { Achievement } from "../../interface/achievements";

const Item =({achievement}: {achievement: Achievement}) => {
    return (
        <Paper className={styles.carouselContainer}>
            <Grid2 className={styles.imageContainer}>
                <a href={achievement.url}>
                    <img src={achievement.image} className={styles.image} alt={achievement.alt} />
                </a>
            </Grid2>
            <Typography className={styles.subtitleImage}>{achievement.description}</Typography>
        </Paper>
    )
}

export const Achievements = () => {

    return (
        <Grid container className={styles.root}>
            <Stack className={styles.titleSection}>
                <Grid container className={styles.subheading}>
                    <Grid2 className={styles.headline}></Grid2>
                    <Typography className={styles.subheadingText}>achievements</Typography>
                </Grid>
                <Grid container className={styles.mainTitleSection}>
                    <Typography className={styles.mainTitle}>These are my achievements through the years</Typography>
                </Grid>
            </Stack>

          <Carousel fullHeightHover={true}  >
            {
                achievementsData.map( (achievement, i) => <Item key={i} achievement={achievement} /> )
            }
        </Carousel>


        </Grid>
    );
};
