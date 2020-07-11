import express from 'express';
import bodyParser from 'body-parser';
import {
    createAircraft,
    deleteAirCraftById,
    findAirCratByID,
    select,
    updateAirCraftById,
    validate
} from "./business/AircraftService"


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

// app.get('/', (req, res) => {
//     res.send('hello world ');
// })

const port = 3000;

app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
    console.log(`http://localhost:${port}`)
})

//Objectif créer CRUD API
//1 GET/api/v1/avions
//2 POST/api/v1/avions
//3 GET/api/v1/avions/1
//4 DELETE/api/v1/avions/1
//5 PUT/api/v1/avions/1

//1 Récupérer les données avions
// définir un ENDPOINT /api/v1/avions
//traitement : rien
//retour: retourner les données avec un code HTTP 200
//retour code 400 si error

app.get('/api/v1/avions', (req, res) => {

    select((err, value)=>{
        if(err){
            res.status(400).send({
                success: false,
                message: 'erreur:' + ' ' + err
            })
        }else{
            res.status(200).send({
                success: true,
                message: 'Avions récupéré avec succès.',
                avions: value
            })
        }
    })
})

//2 CREATE
//Créer le ENDPOINT
//Retourner code 200 si ok
//Si error retourner code 400
//Récupérer les données de la requête
//Valider les données
//Insérer l'avion en bdd

app.post('/api/v1/avions', (req, res) => {
    const airCraft = Object(req.body);
    const valid = validate(airCraft);


    //Validation
    if (!valid.success) {
        res.status(400).send(valid);
    } else {
        //Insérer en bdd
        createAircraft(airCraft, (err, data) => {
            if (err) {
                res.status(400).send({
                    success: false,
                    message: 'erreur:' + ' ' + err
                })
            } else {
                res.status(200).send({
                    message: `l'avion à bien été ajouté.`,
                    avion: data
                })
            }
        });
    }
})

//3 GET BY ID
//Créer un ENDPOINT avec un PATH PARAM /api/v1/avions/:id/
//à ne pas confondre avec les QUERY PARAMS /api/v1/avions/?=adress=1&name=toto
//coder fonction findAirCraftByID

app.get('/api/v1/avions/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);

    findAirCratByID(id, (err, data) => {
        if (err) {
            res.status(400).send({
                success: false,
                message: 'erreur:' + ' ' + err
            })
        }else if(!data){
            res.status(404).send({
                success: false,
                message: 'Avion non trouvé'
            })
        } else {
            res.status(200).send({
                success: true,
                message: `Avion n°${id} récupéré avec succès.`,
                avion: data
            })
        }
    })
})

//4
//DELETE/api/v1/avions/1
app.delete('/api/v1/avions/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);

    deleteAirCraftById(id, (err, data) => {
        if (err) {
            res.status(400).send({
                success: false,
                error: err
            });
        } else if(data.affectedRows === 0){
            res.status(404).send({
                success: false,
                message: `L'avion n°${id} n'a pas été trouvé.`,
            });
        }else {
            res.status(200).send({
                success: true,
                message: `L'avion n°${id} a bien été supprimé.`,
                avion: data
            });
        }
    })
})

//5
//PUT/api/v1/avions/1
//Récupérer l'objet avion de la requête
//updateAirCraftById(id, airCraft)
//gestion code error

app.put('/api/v1/avions/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);

    findAirCratByID(id, (err, data) => {
        if (err) {
            res.status(400).send({
                success: false,
                message: err
            })
        } else if(data ==='') {
          updateAirCraftById(req.body, data, (err, data) => {
                if (err) {
                    res.status(400).send({
                        success: false,
                        message : `l'avion n°${id} n'a pu être modifié.`
                    });
                } else {
                    res.status(200).send({
                        success: true,
                        message: `l'avion n°${id} a bien été modifié.`,
                        avion: data
                    });
                }
            });
        }else{
            res.status(404).send({
                success: false,
                message: `Il n'existe pas d'avion n°${id}`
            })
        }
    });
})