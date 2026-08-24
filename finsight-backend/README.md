package com.finsight.finsightbackend.config;

import com.finsight.finsightbackend.entity.Account;
import com.finsight.finsightbackend.entity.Category;
import com.finsight.finsightbackend.entity.Transaction;
import com.finsight.finsightbackend.entity.User;
import com.finsight.finsightbackend.repository.AccountRepository;
import com.finsight.finsightbackend.repository.CategoryRepository;
import com.finsight.finsightbackend.repository.TransactionRepository;
import com.finsight.finsightbackend.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.math.BigDecimal;
import java.time.LocalDate;

@Configuration
public class DataSeeder {

    @Bean
    CommandLineRunner seedDatabase(
            UserRepository userRepository,
            AccountRepository accountRepository,
            CategoryRepository categoryRepository,
            TransactionRepository transactionRepository,
            PasswordEncoder passwordEncoder
    ) {

        return args -> {

            // =====================================================
            // 1. CREATE DEMO USER
            // =====================================================

            User user = userRepository
                    .findByEmail("demo@finsight.com")
                    .orElseGet(() -> {

                        User newUser = new User();

                        newUser.setName("Demo User");
                        newUser.setEmail("demo@finsight.com");
                        newUser.setPassword(
                                passwordEncoder.encode("Password123")
                        );
                        newUser.setRole("USER");

                        return userRepository.save(newUser);
                    });


            // =====================================================
            // 2. CHECK IF DATA ALREADY EXISTS
            // =====================================================

            if (!accountRepository.findByUserId(user.getId()).isEmpty()) {
                System.out.println("FinSight seed data already exists.");
                return;
            }


            // =====================================================
            // 3. CREATE ACCOUNTS
            // =====================================================

            Account cash = new Account();

            cash.setName("Cash");
            cash.setType("Cash");
            cash.setIcon("💵");
            cash.setBalance(new BigDecimal("4200"));
            cash.setDefault(true);
            cash.setUser(user);

            cash = accountRepository.save(cash);


            Account hdfc = new Account();

            hdfc.setName("HDFC Bank");
            hdfc.setType("Bank");
            hdfc.setIcon("🏦");
            hdfc.setBalance(new BigDecimal("43800"));
            hdfc.setDefault(false);
            hdfc.setUser(user);

            hdfc = accountRepository.save(hdfc);


            // =====================================================
            // 4. CREATE CATEGORIES
            // =====================================================

            Category food = new Category();

            food.setName("Food");
            food.setEmoji("🍔");
            food.setColor("#FFE8B5");
            food.setType("Expense");
            food.setUser(user);

            food = categoryRepository.save(food);


            Category transport = new Category();

            transport.setName("Transport");
            transport.setEmoji("🚗");
            transport.setColor("#D8E8FF");
            transport.setType("Expense");
            transport.setUser(user);

            transport = categoryRepository.save(transport);


            Category shopping = new Category();

            shopping.setName("Shopping");
            shopping.setEmoji("🛍️");
            shopping.setColor("#E8D8FF");
            shopping.setType("Expense");
            shopping.setUser(user);

            shopping = categoryRepository.save(shopping);


            Category salary = new Category();

            salary.setName("Salary");
            salary.setEmoji("💰");
            salary.setColor("#D8F5D0");
            salary.setType("Income");
            salary.setUser(user);

            salary = categoryRepository.save(salary);


            // =====================================================
            // 5. CREATE TRANSACTIONS
            // =====================================================

            // Salary
            Transaction salaryTransaction = new Transaction();

            salaryTransaction.setTitle("Monthly Salary");
            salaryTransaction.setAmount(new BigDecimal("45000"));
            salaryTransaction.setType("Income");
            salaryTransaction.setDate(LocalDate.now().minusDays(10));
            salaryTransaction.setNotes("Monthly salary");
            salaryTransaction.setUser(user);
            salaryTransaction.setAccount(hdfc);
            salaryTransaction.setCategory(salary);

            transactionRepository.save(salaryTransaction);


            // Food
            Transaction foodTransaction = new Transaction();

            foodTransaction.setTitle("Swiggy");
            foodTransaction.setAmount(new BigDecimal("500"));
            foodTransaction.setType("Expense");
            foodTransaction.setDate(LocalDate.now().minusDays(7));
            foodTransaction.setNotes("Dinner");
            foodTransaction.setUser(user);
            foodTransaction.setAccount(cash);
            foodTransaction.setCategory(food);

            transactionRepository.save(foodTransaction);


            // Transport
            Transaction transportTransaction = new Transaction();

            transportTransaction.setTitle("Uber");
            transportTransaction.setAmount(new BigDecimal("300"));
            transportTransaction.setType("Expense");
            transportTransaction.setDate(LocalDate.now().minusDays(5));
            transportTransaction.setNotes("Travel");
            transportTransaction.setUser(user);
            transportTransaction.setAccount(cash);
            transportTransaction.setCategory(transport);

            transactionRepository.save(transportTransaction);


            // Shopping
            Transaction shoppingTransaction = new Transaction();

            shoppingTransaction.setTitle("Amazon");
            shoppingTransaction.setAmount(new BigDecimal("1200"));
            shoppingTransaction.setType("Expense");
            shoppingTransaction.setDate(LocalDate.now().minusDays(3));
            shoppingTransaction.setNotes("Online shopping");
            shoppingTransaction.setUser(user);
            shoppingTransaction.setAccount(hdfc);
            shoppingTransaction.setCategory(shopping);

            transactionRepository.save(shoppingTransaction);


            // =====================================================
            // 6. DONE
            // =====================================================

            System.out.println("----------------------------------------");
            System.out.println("FinSight database seeded successfully!");
            System.out.println("Demo User : demo@finsight.com");
            System.out.println("Password  : Password123");
            System.out.println("Accounts  : 2");
            System.out.println("Categories: 4");
            System.out.println("Transactions: 4");
            System.out.println("----------------------------------------");
        };
    }
}
