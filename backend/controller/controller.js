const {sequelize} = require('../models')

class Controller{
    static async getNilaiByArea(req, res){
        const nilai = await sequelize.query('SELECT sa.area_name, SUM(rp.compliance)/COUNT(*)*100 AS nilai FROM report_product rp JOIN store s ON rp.store_id = s.store_id JOIN store_area sa ON s.area_id = sa.area_id GROUP BY sa.area_name', { type: sequelize.QueryTypes.SELECT })
        nilai.forEach((element, index) => {
            element.key = index
        });
        res.status(200).json(nilai)
    }

    static async getNilaiByBrand(req, res){
        const nilai = await sequelize.query("SELECT distinct pb.brand_name, (select SUM(rp.compliance)/COUNT(*)*100 FROM report_product rp JOIN store s ON rp.store_id = s.store_id JOIN store_area sa ON s.area_id = sa.area_id JOIN product p ON rp.product_id = p.product_id JOIN product_brand pb ON p.brand_id = pb.brand_id where sa.area_name like 'DKI Jakarta') AS jakarta, (select SUM(rp.compliance)/COUNT(*)*100 FROM report_product rp JOIN store s ON rp.store_id = s.store_id JOIN store_area sa ON s.area_id = sa.area_id JOIN product p ON rp.product_id = p.product_id JOIN product_brand pb ON p.brand_id = pb.brand_id where sa.area_name like 'Jawa Barat') AS jawabarat, (select SUM(rp.compliance)/COUNT(*)*100 FROM report_product rp JOIN store s ON rp.store_id = s.store_id JOIN store_area sa ON s.area_id = sa.area_id JOIN product p ON rp.product_id = p.product_id JOIN product_brand pb ON p.brand_id = pb.brand_id where sa.area_name like 'Kalimantan') AS kalimantan, (select SUM(rp.compliance)/COUNT(*)*100 FROM report_product rp JOIN store s ON rp.store_id = s.store_id JOIN store_area sa ON s.area_id = sa.area_id JOIN product p ON rp.product_id = p.product_id JOIN product_brand pb ON p.brand_id = pb.brand_id where sa.area_name like 'Jawa Tengah') AS jawatengah, (select SUM(rp.compliance)/COUNT(*)*100 FROM report_product rp JOIN store s ON rp.store_id = s.store_id JOIN store_area sa ON s.area_id = sa.area_id JOIN product p ON rp.product_id = p.product_id JOIN product_brand pb ON p.brand_id = pb.brand_id where sa.area_name like 'Bali') AS bali FROM report_product rp JOIN store s ON rp.store_id = s.store_id JOIN store_area sa ON s.area_id = sa.area_id JOIN product p ON rp.product_id = p.product_id JOIN product_brand pb ON p.brand_id = pb.brand_id GROUP BY pb.brand_name, sa.area_name", { type: sequelize.QueryTypes.SELECT })
        nilai.forEach((element, index) => {
            element.key = index
        });
        res.status(200).json(nilai)
    }
}

module.exports = Controller