import { Modal, useMantineTheme } from "@mantine/core";
import React from "react";
import { useDispatch } from "react-redux";
import { deletePosts } from "../../actions/postAction";

const PostDeleteModal = ({ modalOpen, setModalOpen, id, currentUser }) => {
    const theme = useMantineTheme();
    const dispatch = useDispatch();
    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deletePosts(id, currentUser));
    };
    return (
        <Modal
            opened={modalOpen}
            onClose={() => setModalOpen(false)}
            centered={true}
            withCloseButton={false}
        >
            <div style={{ gap: "10px", display: "flex", justifyContent: "center" }}>
                Are you sure you want to delete this post?{" "}
            </div>
            <div style={{  display: "flex", justifyContent: "center", marginTop: "10px" }}>
                <button
                    className="button button-delete"
                    style={{ fontSize: "15px", display: "flex", alignSelf: "center"}}
                    onClick={handleDelete}
                >
                    Yes
                </button>
            </div>
        </Modal>
    );
};

export default PostDeleteModal;
