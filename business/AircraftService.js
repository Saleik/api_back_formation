import {del, get, getALl, insert, update} from "../data/AircraftDAO";


export const select = (callback) => {
    return getALl((err, data) => {
        if (err) {
            return callback(err, null);
        } else {
            return callback(null, data);
        }
    });
}
/**
 *
 * @param id
 * @param callback
 */
export const findAirCratByID = function (id, callback) {
    get(id, (err, data) => {
        if (err) {
            return callback(err, null);
        }else if (!data){
            return false
        }
        return callback(null, data);
    })
}
/**
 *
 * @param airCraft
 * @returns {{success: boolean, message: string}}
 */
export const validate = function (airCraft) {

    for (let data in airCraft) {
        if (!airCraft[data]) {
            return {
                success: false,
                message: 'Veuillez remplir le champ' + ' ' + data,
            };

        }
    }
    return {
        success: true,
        message: 'Validé'
    }
}
/**
 *
 * @param airCraft
 * @param callback
 */
export const createAircraft = function (airCraft, callback) {
    insert(airCraft, (err, data) => {
        if (err) {
            return callback(err, null);
        }
        return callback(null, data);
    })
}
/**
 *
 * @param id
 * @param callback
 */
export const deleteAirCraftById = function (id, callback) {
    del(id, (err, data) => {
        if (err) {
            return callback(err, null);
        }
        return callback(null, data);
    })
}
/**
 *
 * @param airCraft
 * @param oldAirCraft
 * @param callback
 * @returns {boolean}
 */
export const updateAirCraftById = function (airCraft, oldAirCraft, callback) {
    //Comparer les valeur du nouvelle avion aux anciennes
    let objectResultArray = Object(oldAirCraft)

    if (!validate(airCraft).success) {
        return false
    }

    for (const airCraftKey in airCraft) {

        if (objectResultArray.hasOwnProperty(airCraftKey)) {
            if (airCraftKey !== 'en_service') {

                if (airCraftKey !== 'place') {
                    objectResultArray[airCraftKey] = airCraft[airCraftKey];
                } else {
                    objectResultArray[airCraftKey] = parseInt(airCraft[airCraftKey], 10);
                }

            } else if (airCraft[airCraftKey] <= 1) {
                objectResultArray[airCraftKey] = parseInt(airCraft[airCraftKey], 10);
            } else {
                return false
            }
        } else {
            return false
        }
    }
    update(objectResultArray, (err) => {

        if (err) {
            return callback(err, null)
        }

        return callback(null, objectResultArray)
    })
}