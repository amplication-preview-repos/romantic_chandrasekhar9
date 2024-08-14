/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumSecurityOperationsCenterMonitoringTools } from "./EnumSecurityOperationsCenterMonitoringTools";
import {
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from "class-validator";
import { VirtualNetworkWhereUniqueInput } from "../../virtualNetwork/base/VirtualNetworkWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class SecurityOperationsCenterUpdateInput {
  @ApiProperty({
    required: false,
    enum: EnumSecurityOperationsCenterMonitoringTools,
    isArray: true,
  })
  @IsEnum(EnumSecurityOperationsCenterMonitoringTools, {
    each: true,
  })
  @IsOptional()
  @Field(() => [EnumSecurityOperationsCenterMonitoringTools], {
    nullable: true,
  })
  monitoringTools?: Array<"Option1">;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => VirtualNetworkWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => VirtualNetworkWhereUniqueInput)
  @IsOptional()
  @Field(() => VirtualNetworkWhereUniqueInput, {
    nullable: true,
  })
  virtualNetwork?: VirtualNetworkWhereUniqueInput | null;
}

export { SecurityOperationsCenterUpdateInput as SecurityOperationsCenterUpdateInput };
