    import axios from "axios";
    import { createContext, useState } from "react";

    export const DataContext = createContext(null)

    export const DataProvider = ({children}) => {
        const [data, setData] = useState()
        
        // Hum sirf tech related categories define kar lenge
        const techCategories = ['all', 'smartphones', 'laptops', 'tablets', 'mobile-accessories', 'wearables'];
        
        // Filtering tech brands name data
        const techBrands = ['all','Apple', 'Samsung', 'Huawei', 'Microsoft Surface', 'Infinix', 'Dell',
         'Vivo', 'Oppo', 'Realme', 'Redmi', 'Asus', 'Lenovo', 'Amazon', 'Beats', 'Sony', 'Logitech'];

        // Fetching all products from api
        const fetchAllProducts = async () => {
            try{
                console.log("🚀 API Call Shuru Hone Wali Hai!");
                //limit=0 karne se DummyJSON apne saare (almost 200) products bhej dega
                const res = await axios.get('https://dummyjson.com/products?limit=0')
    
                // Yahan hum API ke data me se sirf Tech products filter kar rahe hain
                const techProducts = res.data.products.filter(item => 
                    techCategories.includes(item.category)
                );
                console.log(techProducts);
                
                // FRONTEND JUGGAAD: UI test karne ke liye bohot saara data chahiye (100+ items)
                // Toh hum inhi premium tech products ko 4 baar repeat kar denge grid testing ke liye!
                const bulkTechData = [...techProducts, ...techProducts, ...techProducts, ...techProducts];

                // State mein set kar diya
                setData(bulkTechData);
                console.log(bulkTechData)

            }catch(err){
                console.log("Error fetching data data : ", err);
            }
        }
        return <DataContext.Provider value={{ data, setData, fetchAllProducts, techCategories, techBrands }} >
            {children}
        </DataContext.Provider>
    }