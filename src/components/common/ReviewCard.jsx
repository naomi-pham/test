/* eslint-disable react/prop-types */
import dayjs from 'dayjs';
import React from 'react';
import RatingGroupSmall from './RatingGroupSmall';
import relativeTime from 'dayjs/plugin/relativeTime';
import Check from '../icon/Check';
import { handleNullData } from '../../helpers/Helpers';
dayjs.extend(relativeTime);

const ReviewCard = ({ item, responsive }) => {
	return (
		<div
			className={`cozy-relative cozy-min-w-full ${
				responsive ? 'sm:cozy-min-w-[50%]' : ''
			}`}
		>
			<a
				href="/"
				className="cozy-absolute cozy-inset-0 cozy-h-full cozy-w-full"
			/>
			<div
				className={`cozy-flex cozy-flex-col cozy-gap-3 cozy-p-4 ${
					responsive
						? 'sm:cozy-bg-light cozy-mx-auto cozy-w-11/12 cozy-rounded-md'
						: ''
				}`}
			>
				<div className="cozy-flex cozy-gap-3">
					<RatingGroupSmall withoutMessage rating={handleNullData(item.star)} />
					{item?.created_by.is_verified && (
						<div className="cozy-flex cozy-gap-0.5 cozy-opacity-60">
							<Check className="cozy-h-5 cozy-w-5" />
							<p>Verified</p>
						</div>
					)}
				</div>
				<h4 className="cozy-font-graphik-medium cozy-text-title-2">
					{handleNullData(item.title)}
				</h4>
				<p>{handleNullData(item.content)}</p>
				<div className="cozy-flex cozy-items-end cozy-gap-2">
					<p className="cozy-font-graphik-medium">
						{handleNullData(item.created_by.name)},{' '}
						<span className="cozy-text-body-2 cozy-opacity-60">
							{dayjs(item?.created_at).fromNow()}
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default ReviewCard;
