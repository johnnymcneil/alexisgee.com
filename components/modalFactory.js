import Modal from './modal'

export const ModalFactory = ({ context }) => {
  const modals = []

  context.images.forEach((image) => modals.push(
    <Modal image={ image } />
  ))
  
  return modals
}