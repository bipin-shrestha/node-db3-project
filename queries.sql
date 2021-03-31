-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

  SELECT PRODUCTNAME, CATEGORYNAME FROM PRODUCT JOIN CATEGORY ON CATEGORY.ID = PRODUCT.CATEGORYID;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

SELECT [ORDER].ID, SHIPPER.COMPANYNAME FROM SHIPPER JOIN [ORDER] ON [ORDER].SHIPVIA=SHIPPER.ID WHERE [ORDER].ORDERDATE < '2012-08-09';

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

SELECT PRODUCTNAME, QUANTITY FROM PRODUCT AS P JOIN ORDERDETAIL AS O ON P.Id = O.PRODUCTID WHERE O.ORDERID = 10251;


-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

SELECT OrderDetail.OrderId, Customer.CompanyName, Employee.LastName
FROM [Order]
    JOIN OrderDetail on [Order].Id = OrderDetail.OrderId
    JOIN Customer on [Order].CustomerId = Customer.Id
    JOIN Employee on [Order].EmployeeId = Employee.Id
GROUP by OrderDetail.OrderId