import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoUrl, demoChannelTitle, demoChannelUrl, demoVideoTitle } from '../utils/constant';
import { Card, CardMedia } from '@mui/material';

const VideoCard = ({
	video: {
		id: { videoId },
		snippet,
	},
}) => {
	console.log(videoId, snippet);
	return (
		<Card>
			<Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
				<CardMedia image={snippet?.thumbnails.high?.url} alt={snippet?.title} sx={{ width: 358, height: 180 }} />
			</Link>
		</Card>
	);
};

export default VideoCard;
