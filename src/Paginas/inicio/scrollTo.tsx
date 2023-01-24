import { Button } from "@material-ui/core";

function BasicExample() {
  const handleClickScroll = () => {
    const element = document.getElementById('formSide');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div id="hero-section">
        <Button className='use_btn' id='inscrever_btn' variant='contained' onClick={handleClickScroll} >
          SE INSCREVER AGORA
        </Button>
      </div>
    </>
  );
}

export default BasicExample;