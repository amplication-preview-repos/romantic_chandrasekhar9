/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { VendorService } from "../vendor.service";
import { VendorCreateInput } from "./VendorCreateInput";
import { Vendor } from "./Vendor";
import { Post } from "../../post/base/Post";
import { VendorFindManyArgs } from "./VendorFindManyArgs";
import { VendorWhereUniqueInput } from "./VendorWhereUniqueInput";
import { VendorUpdateInput } from "./VendorUpdateInput";
import { ProductFindManyArgs } from "../../product/base/ProductFindManyArgs";
import { Product } from "../../product/base/Product";
import { ProductWhereUniqueInput } from "../../product/base/ProductWhereUniqueInput";

export class VendorControllerBase {
  constructor(protected readonly service: VendorService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Vendor })
  async createVendor(@common.Body() data: VendorCreateInput): Promise<Vendor> {
    return await this.service.createVendor({
      data: data,
      select: {
        contactInfo: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Vendor] })
  @ApiNestedQuery(VendorFindManyArgs)
  async vendors(@common.Req() request: Request): Promise<Vendor[]> {
    const args = plainToClass(VendorFindManyArgs, request.query);
    return this.service.vendors({
      ...args,
      select: {
        contactInfo: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Vendor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async vendor(
    @common.Param() params: VendorWhereUniqueInput
  ): Promise<Vendor | null> {
    const result = await this.service.vendor({
      where: params,
      select: {
        contactInfo: true,
        createdAt: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Vendor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateVendor(
    @common.Param() params: VendorWhereUniqueInput,
    @common.Body() data: VendorUpdateInput
  ): Promise<Vendor | null> {
    try {
      return await this.service.updateVendor({
        where: params,
        data: data,
        select: {
          contactInfo: true,
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Vendor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteVendor(
    @common.Param() params: VendorWhereUniqueInput
  ): Promise<Vendor | null> {
    try {
      return await this.service.deleteVendor({
        where: params,
        select: {
          contactInfo: true,
          createdAt: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/products")
  @ApiNestedQuery(ProductFindManyArgs)
  async findProducts(
    @common.Req() request: Request,
    @common.Param() params: VendorWhereUniqueInput
  ): Promise<Product[]> {
    const query = plainToClass(ProductFindManyArgs, request.query);
    const results = await this.service.findProducts(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        price: true,
        quantity: true,
        updatedAt: true,

        vendor: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/products")
  async connectProducts(
    @common.Param() params: VendorWhereUniqueInput,
    @common.Body() body: ProductWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      products: {
        connect: body,
      },
    };
    await this.service.updateVendor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/products")
  async updateProducts(
    @common.Param() params: VendorWhereUniqueInput,
    @common.Body() body: ProductWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      products: {
        set: body,
      },
    };
    await this.service.updateVendor({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/products")
  async disconnectProducts(
    @common.Param() params: VendorWhereUniqueInput,
    @common.Body() body: ProductWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      products: {
        disconnect: body,
      },
    };
    await this.service.updateVendor({
      where: params,
      data,
      select: { id: true },
    });
  }
}
