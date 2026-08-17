package com.finsight.finsightbackend.config;

import com.finsight.finsightbackend.entity.Account;
import com.finsight.finsightbackend.entity.Category;
import com.finsight.finsightbackend.entity.Transaction;
import com.finsight.finsightbackend.repository.AccountRepository;
import com.finsight.finsightbackend.repository.CategoryRepository;
import com.finsight.finsightbackend.repository.TransactionRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.math.BigDecimal;
import java.time.LocalDate;

@Configuration
public class DataSeeder {

    @Bean
    CommandLineRunner seedDatabase(
            AccountRepository accountRepository,
            CategoryRepository categoryRepository,
            TransactionRepository transactionRepository
    ) {

        return args -> {

            // ==========================================
            // Prevent duplicate seed data
            // ==========================================

            if (accountRepository.count() > 0
                    || categoryRepository.count() > 0
                    || transactionRepository.count() > 0) {

                return;
            }

            // ==========================================
            // Accounts
            // ==========================================

            Account cash = new Account();
            cash.setName("Cash");
            cash.setType("Cash");
            cash.setIcon("💵");
            cash.setBalance(new BigDecimal("5000"));
            cash.setDefault(true);

            Account hdfc = new Account();
            hdfc.setName("HDFC Bank");
            hdfc.setType("Bank");
            hdfc.setIcon("🏦");
            hdfc.setBalance(new BigDecimal("44000"));
            hdfc.setDefault(false);

            cash = accountRepository.save(cash);
            hdfc = accountRepository.save(hdfc);

            // ==========================================
            // Categories
            // ==========================================

            Category food = new Category();
            food.setName("Food");
            food.setEmoji("🍔");
            food.setColor("#FFE8B5");
            food.setType("Expense");

            Category transport = new Category();
            transport.setName("Transport");
            transport.setEmoji("🚗");
            transport.setColor("#DDEBFF");
            transport.setType("Expense");

            Category shopping = new Category();
            shopping.setName("Shopping");
            shopping.setEmoji("🛍️");
            shopping.setColor("#F5D9FF");
            shopping.setType("Expense");

            Category salary = new Category();
            salary.setName("Salary");
            salary.setEmoji("💰");
            salary.setColor("#D5F5D5");
            salary.setType("Income");

            Category other = new Category();
            other.setName("Other");
            other.setEmoji("📦");
            other.setColor("#E8E8E8");
            other.setType("Expense");

            food = categoryRepository.save(food);
            transport = categoryRepository.save(transport);
            shopping = categoryRepository.save(shopping);
            salary = categoryRepository.save(salary);
            other = categoryRepository.save(other);

            // ==========================================
            // Transactions
            // ==========================================

            Transaction salaryTransaction = new Transaction();

            salaryTransaction.setTitle("Monthly Salary");
            salaryTransaction.setAmount(
                    new BigDecimal("45000")
            );
            salaryTransaction.setType("Income");
            salaryTransaction.setDate(
                    LocalDate.of(2026, 8, 1)
            );
            salaryTransaction.setNotes(
                    "Monthly salary"
            );
            salaryTransaction.setAccount(hdfc);
            salaryTransaction.setCategory(salary);

            Transaction swiggy = new Transaction();

            swiggy.setTitle("Swiggy");
            swiggy.setAmount(
                    new BigDecimal("500")
            );
            swiggy.setType("Expense");
            swiggy.setDate(
                    LocalDate.of(2026, 8, 10)
            );
            swiggy.setNotes(
                    "Dinner"
            );
            swiggy.setAccount(cash);
            swiggy.setCategory(food);

            Transaction uber = new Transaction();

            uber.setTitle("Uber");
            uber.setAmount(
                    new BigDecimal("300")
            );
            uber.setType("Expense");
            uber.setDate(
                    LocalDate.of(2026, 8, 12)
            );
            uber.setNotes(
                    "Cab ride"
            );
            uber.setAccount(cash);
            uber.setCategory(transport);

            Transaction amazon = new Transaction();

            amazon.setTitle("Amazon");
            amazon.setAmount(
                    new BigDecimal("1200")
            );
            amazon.setType("Expense");
            amazon.setDate(
                    LocalDate.of(2026, 8, 14)
            );
            amazon.setNotes(
                    "Online purchase"
            );
            amazon.setAccount(hdfc);
            amazon.setCategory(shopping);

            transactionRepository.save(salaryTransaction);
            transactionRepository.save(swiggy);
            transactionRepository.save(uber);
            transactionRepository.save(amazon);
        };
    }
}
