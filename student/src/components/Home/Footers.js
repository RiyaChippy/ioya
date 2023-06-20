import React from 'react';

const Footer = () => {
  const styles = {
    marginTop: 'auto', 
    paddingTop: '8px', 
    backgroundColor: '#f0f0f0',
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    textAlign: 'center',
    
  };

  return (
    <div className="a" style={styles}>
      <footer>
        <center>
          <small>
            &copy;2023 &nbsp; User Agreement &nbsp; Privacy Policy &nbsp; Community Guidelines &nbsp; Cookie Policy &nbsp; Copyright policy &nbsp; Send Feedback &nbsp; Language
          </small>
        </center>
      </footer>
    </div>
  );
};

export default Footer;

