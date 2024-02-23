import React,{ Fragment, ReactNode } from 'react';
import { useState,useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface Ability {
  [key: string]: AbilityName;
}

interface Abilities {
  [key: number]: Ability;
}
interface AbilityName{
  name:string;
}

interface Sprite{
  back_default:string;
}


type Props = {
  children: ReactNode;
  abilities: Abilities;
  isOpenFlag: boolean;
  onClose: VoidFunction;
  sprites:Sprite;
};

const Modal = ({ isOpenFlag, abilities,sprites,children, onClose }: Props) => {
  let [isOpen, setIsOpen] = useState(true)
  useEffect(()=>{
    setIsOpen(isOpenFlag)

  },[isOpenFlag]);
  return (

    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
  <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-center md:items-center">
              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-screen">
                <div className='flex justify-center'><img src={sprites.back_default} alt="" /></div>
                <div className="mt-2 justify-center flex">
                <Dialog.Panel  className="px-4 py-3 sm:flex sm:flex-row-reverse  w-full  flex justify-center flex-wrap">
                  {Object.keys(abilities).map((key: any) => {
                      if(key == 0) {
                        return;
                       }
                      const ability = abilities[key];
                      return ability.ability.name && (<p className='w-full'>アビリティ：{ability.ability.name}</p>)
                    })}
                </Dialog.Panel>
                </div>
              </div>
            </div>
          </div>
          <div  className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={() => setIsOpen(false)}>Close</button></div>

          </div>
        </div>
      </div>
    </div>
    </Dialog>

  )
};

export default Modal;