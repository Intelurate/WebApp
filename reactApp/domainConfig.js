let domain = 'http://localhost:7272';

export default {
    /**************************************************************************************************************************************************************** 
    ** ACTION FILE       ** FXN NAME                        ** ENDPOINT                                                 **  PARAMS                      ** ACTION **    
    ****************************************************************************************************************************************************************/
    /* WORKCENTER */
                        loadWorkcentersAsync:               domain + '/api/workcenters/',                               // {}                           // GET
                        loadWorkcenterCounterAsync:         domain + '/api/workcenters/loadWorkcenterCounter',          // {}                           // GET
                        saveWorkcenterAsync:                domain + '/api/workcenter/',                                // {}                           // POST
                        updateWorkcenterAsync:              domain + '/api/workcenter',                                 // {id}                         // PUT
                        deleteWorkcenterAsync:              domain + '/api/workcenter',                                 // {id}                         // DELETE
    /* USER */
                        loadUsersAsync:                     domain + '/api/users/',                                     // {}                           // GET
                        loadUserCounterAsync:               domain + '/api/users/loadWorkcenterCounter',                // {}                           // GET
                        saveUserAsync:                      domain + '/api/user/',                                      // {}                           // POST
                        updateUserAsync:                    domain + '/api/user',                                       // {id}                         // PUT
                        deleteUserAsync:                    domain + '/api/user',                                       // {id}                         // DELETE
    /* COMPANY */
                        loadCompaniesAsync:                 domain + '/api/companies/',                                 // {}                           // GET
                        loadCompanyCounterAsync:            domain + '/api/companies/loadCompanyCounter',               // {}                           // GET
                        saveCompanyAsync:                   domain + '/api/company/',                                   // {}                           // POST
                        updateCompanyAsync:                 domain + '/api/company',                                    // {id}                         // PUT
                        deleteCompanyAsync:                 domain + '/api/company',                                    // {id}                         // DELETE

   /* VARIANCE */
                        loadVariancesAsync:                 domain + '/api/variances/',                                 // {}                           // GET
                        loadVarianceCounterAsync:           domain + '/api/variances/loadVarianceCounter',              // {}                           // GET
                        loadEmployeeVariancesAsync:         domain + '/api/variances/employeevariance',                 // {id}                         // GET
                        loadOptionYearsAsync:               domain + '/api/variances/optionyears',                      // {}                           // GET   
                        saveVarianceAsync:                  domain + '/api/variance',                                   // {}                           // POST 
                        updateVarianceAsync:                domain + '/api/variance',  
                        deleteVarianceAsync:                domain + '/api/variance',                                   // {id}                         // DELETE
    /* USERTIME */                        
                        saveUserTimeAsync:                  domain + '/api/usertimes/',                                 // {}                           // POST
    /* EMPLOYEE */
                        loadEmployeesAsync:                 domain + '/api/employees/',                                 // {}                           // GET
                        loadEmployeeCounterAsync:           domain + '/api/employees/loadEmployeeCounter',              // {}                           // GET
                        saveEmployeeAsync:                  domain + '/api/employee/',                                  // {}                           // POST

                        updateEmployeeAsync:                domain + '/api/employee',                                   // {id}                         // PUT

    /* POSITIONMANAGEMENT */
                        loadPMClinsAsync:                   domain + '/api/positionmanagement/',                                // {}                   // GET
                        loadPMClinCounterAsync:             domain + '/api/positionmanagement/loadPMClinCounter',               // {}                   // GET
                        savePMClinAsync:                    domain + '/api/positionmanagement/',                                // {}                   // POST
                        updatePMClinAsync:                  domain + '/api/positionmanagement',                                 // {id}                 // PUT
                        getPMClinYears:                     domain + '/api/positionmanagement/getyears/',                       // {}                   // GET
                        loadClinTitlesAsync:                domain + '/api/positionmanagement/getclins/',                       // {id}                 // GET
                        loadCLINPositionAsync:              domain + '/api/positionmanagement/getClinPositions/',               // {}                   // GET
                        loadEmployeesWithThisPositionAsync: domain + '/api/positionmanagement/getEmployeesWithThisPosition/',   // {}                   // GET

                        
    /* REPORTS */
                        loadClinsAsync:                     domain + '/api/clins/',                               // {optionYear}                 // GET
                        getForgeryTokenAsync:               domain + '/getForgeryToken/'                          // {optionYear}                 // GET

};
