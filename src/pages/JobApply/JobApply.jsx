import React from 'react';
import { useParams } from 'react-router';

const JobApply = () => {
    const id = useParams();
    return (
        <div>
            job id :- {id.id}
        </div>
    );
};

export default JobApply;