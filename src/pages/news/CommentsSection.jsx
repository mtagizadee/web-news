import React, {useState} from 'react';
import useFetchUser from "../../hooks/useFetchUser";
import {useSelector} from "react-redux";
import Loader from "../../components/Loader";
import {CommentService} from "../../services/comment-service";
import Modal from "../../components/Modal";
import ProfileIcon from "../../components/ProfileIcon";
import {useGetUserByIdQuery} from "../../feature/api/api";

const CommentsSection = ({comments, newsId}) => {
    const token = useSelector((state) => state.auth.token)
    const {user, isLoading} = useFetchUser(token);
    const [modal, setModal] = useState(false);

    if (isLoading) return <Loader />

    const onClick = () => {
        setModal(true);
    }

    const isEmpty = comments.length === 0;
    return (
        <>
            <div className='relative'>
                <hr className='border-none h-[1px] bg-gray-600'/>
                {isEmpty?
                    <div className='center-content min-h-[200px]'>
                        <p className='comments-text'> No comments here yet... </p>
                    </div> :
                    <div className='p-6'>
                        { comments.map((comment) => <Comment key={comment.id} comment={comment} />) }
                    </div>
                }
                <button className='absolute right-3 bottom-[-1em] comments-text text-lg' onClick={onClick}> Add </button>
            </div>
            <Modal modal={modal} setModal={setModal}>
                <CreateCommentForm newsId={newsId}/>
            </Modal>
        </>
    );
};


const Comment = ({comment}) => {
    const {data, isLoading, error} = useGetUserByIdQuery(comment.authorId);

    if (isLoading) return <Loader />

    return (
        <div className='flex max-w-[600px] flex-col border-2 border-gray-400 rounded p-3'>
            <ProfileIcon fullName={data.fullName}/>
            <p> {comment.content} </p>
        </div>
    )
}

const CreateCommentForm = ({newsId}) => {
    const [content, setContent] = useState('');
    const token = useSelector((state) => state.auth.token);

    const onSubmit = async () => {
        try {
            await CommentService.create({content, newsId},token);
            alert('Successfully created a comment...');
            window.location.reload();
        } catch (error) {
            alert(error);
        }
    }

    return (
        <form className='bg-white' onSubmit={onSubmit}>
            <textarea value={content} onChange={(e) => setContent(e.target.value)} rows="5"/>
            <button className='comments-text w-full mt-3'> Create </button>
        </form>
    )
}

export default CommentsSection;