import connection from "./Connection";

export const getALl = (callback)=>{
    connection.query("SELECT * FROM avions", (err, result) => {

        if (err) {
            return callback (err, null);
        }
        return callback(null, result);
    })
}

export const get = (id, callback)=>{

    connection.query(`SELECT * FROM avions WHERE id=${id}`, (err, result) => {
        if (err) {
            return callback(err, null);
        }
        return callback(null, result[0]);
    })
}

export const insert = (airCraft, callback)=>{
    connection.query(`INSERT INTO avions (avionneur, description, modele, annee, place, incident, en_service, interieur)
                            VALUES ('${airCraft.avionneur}','${airCraft.description}','${airCraft.modele}', '${airCraft.annee}', '${airCraft.place}',
                                    '${airCraft.incident}', '${airCraft.en_service}', '${airCraft.interieur}')`, (err, result) => {

        connection.query(`SELECT * FROM avions WHERE id=${result.insertId}`, (err, result) => {
            if (err) {
                return callback(err, null);
            }
            return callback(null, result[0]);
        })
    })
}

export const del = (id, callback)=>{
    connection.query(`DELETE FROM avions WHERE id=${id}`, (err, result) => {
        if (err) {
            return callback(err, null);
        }
        return callback(null, result);
    })
}

export const update = (newAirCraft, callback)=>{
    connection.query(`UPDATE avions SET avionneur= '${newAirCraft.avionneur}', description='${newAirCraft.description}', modele='${newAirCraft.modele}', annee='${newAirCraft.annee}',
                    place='${newAirCraft.place}', incident='${newAirCraft.incident}', en_service='${newAirCraft.en_service}', 
                    interieur='${newAirCraft.interieur}' WHERE id=${newAirCraft.id}`, (err) => {

        if (err) {
            return callback(err);
        }else{
            return callback(null);
        }
    })
}
