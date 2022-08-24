import React from "react";
import '../../ApiService/Movies'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Details, Movie } from "@material-ui/icons";


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    // gridList: {
    //     flexWrap: 'nowrap',
    //     transform: 'translateZ(0)',
    //     height: '250'
    // },
    title: {
        color: 'white',
        textAlign: 'left'
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
});


function ReleasedMovies(props) {
    const { classes } = props;
    return (
        <div>
            <div className={classes.root}>
                <GridList cols={4}>
                    {props.movies && props.movies.map(tile => (
                        <GridListTile key={tile.poster_url} style={{ height: 350, margin: 15 }}>
                            <a href={`/movie/:id=${tile.id}`}>
                                <img src={tile.poster_url} alt={tile.title} />
                                <GridListTileBar
                                    title={tile.title}
                                    subtitle={`Release Date:${tile.release_date}`}
                                />
                            </a>
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        </div>
    )
}

ReleasedMovies.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ReleasedMovies)