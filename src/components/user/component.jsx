"use client";
import { useContext, useState } from 'react';
import styles from './styles.module.scss';
import { UserContext } from '@/context/user-provider';
import { Modal } from '../modal-login-form/component';
// import { CartButtonContainer } from '../cart-button/container';
import { Button } from '../button/component';

export const User = () => {
    const { name, email, id, updateUser } = useContext(UserContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const isAuthenticated = name !== "" && email !== "" && id !== "";

    const handleLoginClick = () => {
        setIsModalOpen(true);
    };

    const handleLogoutClick = () => {
        updateUser({ name: '', email: '' });
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (

        <div className={styles.user}>

            {isAuthenticated ? (
                <div>
                    <span style={{ marginRight: "10px" }}>name: {name}</span>
                    <span style={{ marginRight: "10px" }}>e-mail: {email}</span>
                    <Button className={styles.button} onClick={handleLogoutClick} >Logout</Button>
                </div>
            ) : (
                <>
                    <Button className={styles.button} onClick={handleLoginClick} >Login</Button>
                    <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
                </>
            )}
            {/* <CartButtonContainer></CartButtonContainer> */}
        </div>
    );
};