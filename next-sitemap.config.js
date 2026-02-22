/** @type {import('next-sitemap').IConfig} */
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
    siteUrl: 'https://hamidrezarezaii.ir',
    generateRobotsTxt: true,
    sitemapSize: 5000,

    transform: async (config, path) => {
        return {
            loc: path,
            changefreq: 'daily',
            priority: 0.7,
            lastmod: new Date().toISOString(),
        };
    },

    additionalPaths: async (config) => {
        const paths = [];

        const blogs = await prisma.blog.findMany({
            select: { id: true, publishDate: true },
        });

        blogs.forEach((blog) => {
            paths.push({
                loc: `/blog/${blog.id}`,
                lastmod: blog.publishDate.toISOString(),
                priority: 0.9,
                changefreq: 'weekly',
            });
        });

        const projects = await prisma.project.findMany({
            select: { id: true, updatedAt: true },
        });

        projects.forEach((project) => {
            paths.push({
                loc: `/projects/${project.id}`,
                lastmod: project.updatedAt.toISOString(),
                priority: 0.8,
                changefreq: 'weekly',
            });
        });

        return paths;
    },
};