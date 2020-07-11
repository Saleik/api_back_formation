import {
    createAircraft,
    deleteAirCraftById,
    findAirCratByID,
    select,
    updateAirCraftById,
    validate
} from "./AircraftService";
import {expect, test} from "@jest/globals";

const newAircraft = {
    avionneur: 'Boeing',
    description: 'Long courrier',
    modele: '777MAX',
    annee: '2019',
    place: '380',
    incident: '0',
    en_service: '1',
    interieur: 'BC60'
}

test('création d\'un avion test de id', done => {
    createAircraft(newAircraft, (err, data) => {
        expect(data.id).toBe(127);
        done();
    })
})

test('retrouver un avion avec son id', done => {
    findAirCratByID(2, (err, data) => {
        expect(data.id).toBe(2)
        done()
    })
})

test('validation des données envoyées', () => {
    expect(validate(newAircraft).success).toBe(true);
})

test('Suppression d\'un avion de la bdd', done => {
    deleteAirCraftById(118, (err, data) => {
        expect(data.affectedRows).toBe(1)
        done();
    })
})

test('selection de tous les avions', done => {
    const airCraft = {
        avionneur: 'UPDATED'
    }
    findAirCratByID(117, (err, data) => {
        if (err) throw err
        updateAirCraftById(airCraft, data, (err, data) => {
            expect(data.avionneur).toBe('UPDATED');
            done();
        })
    })
})

test('Récupérer tous les avions', done => {
    select((err, data)=>{
        if (err) throw err
        expect(data).toBeDefined()
        done()
    })
})