const express = require('express');
const router = express.Router();
const musicController = require('../controllers/music.controller');

// getSong
router.get('/song', musicController.getSong);

// getDetailPlaylist
router.get('/detail-playlist', musicController.getDetailPlaylist);

// getHome
router.get('/home', musicController.getHome);

// getTop100
router.get('/top100', musicController.getTop100);

// getChartHome
router.get('/chart-home', musicController.getChartHome);

// getNewReleaseChart
router.get('/new-release-chart', musicController.getNewReleaseChart);

// getInfoSong
router.get('/info-song', musicController.getInfo);

// getArtist
router.get('/artist', musicController.getArtist);

// getArtistSong
router.get('/artist-songs', musicController.getArtistSong);

// getLyric
router.get('/lyric', musicController.getLyric);

// search
router.get('/search', musicController.search);

// getListMV
router.get('/list-mv', musicController.getListMV);

// getCategoryMV
router.get('/category-mv', musicController.getCategoryMV);

// getVideo
router.get('/video', musicController.getVideo);

module.exports = router;
