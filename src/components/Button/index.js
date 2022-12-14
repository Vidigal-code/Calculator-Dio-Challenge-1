import { ButtonContainer, ButtonDell   } from './styles';

export const Button = ({label, onClick}) => {
    return (
      <ButtonContainer onClick={onClick} type="button">
       {label}
      </ButtonContainer>
    );
  }

  export const ButtonDelete = ({label, onClick}) => {
    return (
      <ButtonDell onClick={onClick} type="button">
       {label}
      </ButtonDell>
    );
  }
  
