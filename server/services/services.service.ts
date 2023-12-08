import servicesSchema, { ServiceType } from "./services.schema";

const createService = async (service: ServiceType) => {
  try {
    const newService = await servicesSchema.create(service);
    return newService;
  } catch (error) {
    throw error;
  }
};

const getService = async (id: string) => {
  try {
    const service = await servicesSchema
      .findById(id)
      .populate("seller")
      .populate("reviews.user");
    if (!service) {
      throw new Error("Service not found");
    }
    return service;
  } catch (error) {
    throw error;
  }
};

const getUsersServices = async (seller: string) => {
  try {
    const services = await servicesSchema
      .find({ seller })
      .populate("seller")
      .populate("reviews.user");
    return services;
  } catch (error) {
    throw error;
  }
};

const getServices = async () => {
  try {
    const services = await servicesSchema
      .find({})
      .populate("seller")
      .populate("reviews.user");
    return services;
  } catch (error) {
    throw error;
  }
};

const updateService = async (id: string, service: ServiceType) => {
  try {
    const updatedService = await servicesSchema
      .findByIdAndUpdate(id, service, {
        new: true,
      })
      .populate("seller")
      .populate("reviews.user");
    return updatedService;
  } catch (error) {
    throw error;
  }
};

const deleteService = async (id: string) => {
  try {
    const deletedService = await servicesSchema.findByIdAndDelete(id);
    return deletedService;
  } catch (error) {
    throw error;
  }
};

export {
  createService,
  deleteService,
  getService,
  getServices,
  getUsersServices,
  updateService,
};
