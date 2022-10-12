const {sequelize} = require('../models')

class Controller{
    static async getNilaiByArea(req, res){
        const nilai = await sequelize.query('SELECT sa.area_name, SUM(rp.compliance)/COUNT(*)*100 AS nilai FROM report_product rp JOIN store s ON rp.store_id = s.store_id JOIN store_area sa ON s.area_id = sa.area_id GROUP BY sa.area_name')
        res.send(nilai)
    }

    static async getNilaiByBrand(req, res){
        const nilai = await sequelize.query('SELECT pb.brand_name, sa.area_name, SUM(rp.compliance)/COUNT(*)*100 AS nilai FROM report_product rp JOIN store s ON rp.store_id = s.store_id JOIN store_area sa ON s.area_id = sa.area_id JOIN product p ON rp.product_id = p.product_id JOIN product_brand pb ON p.brand_id = pb.brand_id GROUP BY pb.brand_name, sa.area_name')
        res.send(nilai)
    }
}

module.exports = Controller