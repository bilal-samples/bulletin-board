import React, {FC} from "react";
import {Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const MAX_LENGTH = 100;
const useStyles = makeStyles({
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 150,
    },
});

interface PostPreviewProps {
    title: string,
    content: string,
    imageUrl: string
}

const PostPreview: FC<PostPreviewProps> = ({title, content, imageUrl}) => {
    const classes = useStyles();

    return (
        <Grid item xs={12}>
            <CardActionArea component="a" href="#">
                <Card className={classes.card}>
                    <CardMedia className={classes.cardMedia} image={imageUrl}/>
                    <div className={classes.cardDetails}>
                        <CardContent>
                            <Typography component="h2" variant="h5">
                                {title}
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                                {content.substring(0, Math.min(MAX_LENGTH, content.length))}
                            </Typography>
                        </CardContent>
                    </div>
                </Card>
            </CardActionArea>
        </Grid>
    )
}

export default PostPreview;