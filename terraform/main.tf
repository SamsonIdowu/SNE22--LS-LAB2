terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }

  required_version = ">= 1.2.0"
}

provider "aws" {
  region  = "us-east-1"
}

resource "aws_instance" "app_server" {
  ami           = "ami-0778521d914d23bc1"
  instance_type = "t2.micro"

  tags = {
    Name = "sne22-ls-lab2"
  }
}