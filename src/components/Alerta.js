import React, { useState} from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

 
    
const AlertDismissibleExample = () => {
        const [show, setShow] = useState(true);
      
        if (show) {
          return (
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
              <Alert.Heading>PAGINA EN CONSTRUCCION!!!</Alert.Heading>
              <p>
                Gracias por visitar mi pagina. La estamos armando para que quede perfecta para vos
                y puedas encontrar todo lo que necesitas para tu bebé. si queres podes seguirnos en 
                instagram <Alert.Link href="https://instagram.com/bblandiabolsos">en Bblandiabolsos</Alert.Link>,
                o mandarnos un whatsapp <Alert.Link href="https://wa.me/message/MR7DAO67ESJKG1">haciendo click AQUI!</Alert.Link>
              </p>
            </Alert>
          );
        }
        return <Button  className="btn btn-danger" onClick={() => setShow(true)}>INFO</Button>;
      }
      
      export default AlertDismissibleExample