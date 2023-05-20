
import http from "@/http-common";

class CrudServices {

    index(): Promise<any> {
        return http.get("/crud");
    }
    storage(data: any): Promise<any> {
        return http.post("/crud", data);
    }
    show(id: any): Promise<any> {
        return http.get(`/crud/${id}`);
    }
    update(id: any, data: any): Promise<any> {
        return http.put(`/crud/${id}`, data);
    }
    delete(id: any): Promise<any> {
        return http.delete(`/crud/${id}`);
    }
  }
  
  export default new CrudServices();