
'use client';

import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';


const NO = ({icon}) => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <>

    {/* =================================================== */}
    {/* =================================================== */}
    {/* <a  className="flex items-center hover:text-gray-200" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="flex absolute -mt-5 ml-4">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                  </span>
                </a> */}
    {/* =================================================== */}
    {/* =================================================== */}
      <Button onClick={() => setOpenModal(true)}>{icon} </Button>
      <Modal dismissible  show={openModal} onClose={() => setOpenModal(false)} >
        <Modal.Header>Favourite Picks</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base text-center leading-relaxed text-gray-500 dark:text-gray-400">
              <ul>
                <li>car1</li>
                <li>car2</li>
                <li>car3</li>
                </ul>
            </p>
            
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>❎Clear List</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            🔙
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default NO
