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
import { VirtualDesktopService } from "../virtualDesktop.service";
import { VirtualDesktopCreateInput } from "./VirtualDesktopCreateInput";
import { VirtualDesktop } from "./VirtualDesktop";
import { VirtualDesktopFindManyArgs } from "./VirtualDesktopFindManyArgs";
import { VirtualDesktopWhereUniqueInput } from "./VirtualDesktopWhereUniqueInput";
import { VirtualDesktopUpdateInput } from "./VirtualDesktopUpdateInput";

export class VirtualDesktopControllerBase {
  constructor(protected readonly service: VirtualDesktopService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: VirtualDesktop })
  async createVirtualDesktop(
    @common.Body() data: VirtualDesktopCreateInput
  ): Promise<VirtualDesktop> {
    return await this.service.createVirtualDesktop({
      data: {
        ...data,

        virtualNetwork: data.virtualNetwork
          ? {
              connect: data.virtualNetwork,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        name: true,
        osType: true,
        updatedAt: true,

        virtualNetwork: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [VirtualDesktop] })
  @ApiNestedQuery(VirtualDesktopFindManyArgs)
  async virtualDesktops(
    @common.Req() request: Request
  ): Promise<VirtualDesktop[]> {
    const args = plainToClass(VirtualDesktopFindManyArgs, request.query);
    return this.service.virtualDesktops({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        osType: true,
        updatedAt: true,

        virtualNetwork: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: VirtualDesktop })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async virtualDesktop(
    @common.Param() params: VirtualDesktopWhereUniqueInput
  ): Promise<VirtualDesktop | null> {
    const result = await this.service.virtualDesktop({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        osType: true,
        updatedAt: true,

        virtualNetwork: {
          select: {
            id: true,
          },
        },
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
  @swagger.ApiOkResponse({ type: VirtualDesktop })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateVirtualDesktop(
    @common.Param() params: VirtualDesktopWhereUniqueInput,
    @common.Body() data: VirtualDesktopUpdateInput
  ): Promise<VirtualDesktop | null> {
    try {
      return await this.service.updateVirtualDesktop({
        where: params,
        data: {
          ...data,

          virtualNetwork: data.virtualNetwork
            ? {
                connect: data.virtualNetwork,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          name: true,
          osType: true,
          updatedAt: true,

          virtualNetwork: {
            select: {
              id: true,
            },
          },
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
  @swagger.ApiOkResponse({ type: VirtualDesktop })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteVirtualDesktop(
    @common.Param() params: VirtualDesktopWhereUniqueInput
  ): Promise<VirtualDesktop | null> {
    try {
      return await this.service.deleteVirtualDesktop({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          osType: true,
          updatedAt: true,

          virtualNetwork: {
            select: {
              id: true,
            },
          },
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
}
