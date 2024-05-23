﻿using Fiorello_PB101_Demo.Models;

namespace Fiorello_PB101_Demo.Services.Interfaces
{
    public interface IProductService
    {
        Task<IEnumerable<Product>> GetAllAsync();
        Task<Product> GetByWithAllDatasAsync(int id);
        Task<Product> GetByIdAsync(int id);

    }
}