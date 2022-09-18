const runQuery = require('../DAL.js');
const getAll = (cb) => {
    runQuery('SELECT * FROM `vacation` ORDER BY `start_date`', [], cb)
}
const add = ({ descriprion, destination, picture, start_date, end_date, price }, role, cb) => {
    if (role == 1)
        return runQuery(
            'INSERT INTO `vacation`( `descriprion`, `destination`, `picture`, `start_date`, `end_date`, `price`, `followers`) VALUES(?,?,?,?,?,?,?)',
            [descriprion, destination, picture, start_date, end_date, price, (0)], cb);
    return cb(401);
}
const report = (role, cb) => {
    if (role == 1)
        return runQuery('SELECT * FROM `vacation` WHERE `followers`!=0;', [], cb)
    return cb(401);
}
const follow = ({ role, vid, uid }, cb) => {
    debugger;
    if (role == 0) {
        runQuery('INSERT INTO `vacations_followers`(`vacation_id`,`user_id`) VALUES (?,?)', [vid, uid], (res) => {
            if (res == null) { return cb('faild') }
            else {
                runQuery('UPDATE `vacation` SET `followers`=`followers`+1 WHERE `id` = ?', [vid], (result) => {
                    (result == null ? cb(401) : cb(result));
                })
            }
        })
    } else cb(401);
}
const unfollow = ({ role, vid, uid }, cb) => {
    if (role == 0) {
        runQuery('DELETE FROM `vacations_followers` WHERE`vacation_id`= ? AND `user_id` = ? ', [vid, uid], (res) => {
            if (res == null) { return cb('faild') }
            else {
                runQuery('UPDATE `vacation` SET `followers`=`followers` -1 WHERE `id` = ?', [vid], (result) => {
                    (result == null ? cb(401) : cb(result));
                })
            }
        })
    } else cb(401);
}
const update = (role, { descriprion, destination, picture, start_date, end_date, price }, id, cb) => {
    if (role == 1) {
        runQuery(`UPDATE vacation SET  descriprion = COALESCE(NULLIF(?,''),descriprion),destination = COALESCE(NULLIF(?,''),destination),
    picture = COALESCE(NULLIF(?,''),picture), start_date = COALESCE(NULLIF(?,''),start_date),  end_date = COALESCE(NULLIF(?,''),end_date),
    price = COALESCE(NULLIF(?,''),price) WHERE id = ?`, [descriprion, destination, picture, start_date, end_date, price, id], cb)
    } else cb(401);
}
const remove = (role, id, cb) => {
    if (role == 1) {
        runQuery('DELETE FROM `vacations_followers` WHERE `vacation_id`=?', [id], () => {
            runQuery('DELETE FROM `vacation` WHERE `id`= ? ', [id], (result) => {
                (result == null ? cb(401) : cb(result));
            }
            )
        })

    } else cb(401);
}
const getByUser = (uid, cb) => {
    runQuery(`SELECT v.*, COUNT(f.vacation_id) as follow FROM vacation v 
                 LEFT JOIN vacations_followers f ON f.vacation_id = v.id AND f.user_id = ? GROUP BY v.id
                 ORDER BY(f.vacation_id = v.id AND f.user_id = ?) DESC; `, [uid, uid], (result) => {
        if (result.length == 0) { cb(401) } else {
            cb(result)
        }

    })
}

    


module.exports = {
    getAll,
    add,
    report,
    follow,
    unfollow,
    update,
    remove,
    getByUser
}



