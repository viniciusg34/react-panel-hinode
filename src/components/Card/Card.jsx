import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import whats from '../../assets/images/whatsapp.png'
import	"../../assets/styles/cards/cards.css"
// <div className='card'>
//     <img className='championImage' src={props.obj.imagemDoHero} alt="foto do campeão" />
//     <p className='championName stats'>Campeão: {props.obj.hero}</p>
//     <p className='championClass stats'>Classe: {props.obj.classe}</p>
//     <p className='championPrice stats'>preço: {props.obj.preco}</p>
//     <p className='championSkills stats'>Skills: {props.obj.skillUm}, {props.obj.skillDois} </p>
//     <p className='championSkills stats'>Skill passiva: {props.obj.skillPassiva}</p>
// </div>

export default function MultiActionAreaCard(props) {

    function redirectTime(){
      window.location = "https://wa.me/5521983589756"
    }
    return (
      <Card sx={{ maxWidth: 400 }}>
        <CardActionArea >
          <CardMedia
            component="img"
            height="350"
            image={props.obj.foto}
            alt="Produto"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {props.obj.produto}
            </Typography>
            <Typography variant="body2" color="text.secondary">

            {props.obj.descricao}
            <br/>
            <br/>
            <p>armazenamento:</p>
            <ul>
                <p>{props.obj.armazenamento.am1}</p>
                <p>{props.obj.armazenamento.am2}</p>
                <p>{props.obj.armazenamento.am3}</p>
                <p>{props.obj.armazenamento.am4}</p>
            </ul>  
            <br/>
            <p>cores:</p>
            <div className='grid_card'>
                <p>{props.obj.cor.cor1}</p>
                <p>{props.obj.cor.cor2}</p>
                <p>{props.obj.cor.cor3}</p>
                <p>{props.obj.cor.cor4}</p>
                <p>{props.obj.cor.cor5}</p>
                <p>{props.obj.cor.cor6}</p>
                <p>{props.obj.cor.cor7}</p>
            </div>  
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={redirectTime}>
            Whatsapp <img src={whats} className="icon" />
          </Button>
        </CardActions>
      </Card>
    );
  }