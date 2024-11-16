import { Database } from "bun:sqlite";

const db = new Database('mydb.sqlite');

const gettransports = () => {
    try {
        const query = db.query("SELECT * from transport;");
        return query.all();
    } catch (error) {
        console.log('error', error);
        return [];
    }
};

const gettransport = (id: number) => {
    try {
        const query = db.query("SELECT * from transport where id=$id;");
        return query.get({
            $id: id
        });
    } catch (error) {
        console.log('error', error);
        return [];
    }
};

const createtransport = (transport: any) => {
    try {
        const query = db.query(`
            INSERT INTO "transport" 
            ("shopname", "pro_name", "address", "pro_quantity") 
            VALUES ($shopname, $pro_name, $address, $pro_quantity)
        `);
        
        return query.run({
            $shopname: transport.shopname,
            $pro_name: transport.pro_name,
            $address: transport.address,
            $pro_quantity: transport.pro_quantity
        });
    } catch (error) {
        console.log('error', error);
    }
};
const updatetransport = (id: number, transport: any) => {
    try {
        const query = db.query(`
            UPDATE "transport" 
            SET "shopname"=$shopname, 
                "pro_name"=$pro_name, 
                "address"=$address, 
                "pro_quantity"=$pro_quantity 
            WHERE "id"=$id
    `);
        
        return query.run({
            $id: id,
            $shopname: transport.shopname,
            $pro_name: transport.pro_name,
            $address: transport.address,
            $pro_quantity: transport.pro_quantity
        });
    } catch (error) {
        console.log('error', error);
    }
};
const deletetransport = (id: number) => {
    try {
        const query = db.query(`
           DELETE FROM transport WHERE id=$id; `);
           query.run ({
            $id: id
           })
    } catch (error) {
        console.log('error', error);
    }
};

export {
    gettransports,
    gettransport,
    createtransport,
    updatetransport,
    deletetransport
}