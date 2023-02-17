import { Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { fetchRapidAPI } from '../utils/fetchRapidAPI';
import { Sidebar, Videos } from './';

const Feed = () => {
	const [selectedCategory, setSelectedCategory] = useState('New');

	useEffect(() => {
		fetchRapidAPI(`search?part=snipper&q=${selectedCategory}`);
	}, [selectedCategory]);

	return (
		<Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
			<Box sx={{ height: { sx: 'auto', md: '92vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
				<Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

				<Typography className='copyright' variant='body2' sx={{ mt: 1.5, color: '#fff' }}>
					copyright 2022 Trung Hai
				</Typography>
			</Box>
			<Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
				<Typography variant='h4' fontWeight='bold' mb={2} sx={{ color: 'white' }}>
					{selectedCategory} {}
					<span style={{ color: '#f31503' }}> Videos</span>
				</Typography>
				<Videos videos={[]} />
			</Box>
		</Stack>
	);
};

export default Feed;