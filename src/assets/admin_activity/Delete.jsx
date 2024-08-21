const Delete = ({ onClick, id }) => {
  return (
    <svg
      id={id}
      onClick={onClick}
      width='25'
      height='24'
      viewBox='0 0 25 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M5.5 12H19.5'
        stroke='#CFD1DA'
        stroke-width='2'
        stroke-linecap='square'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default Delete;
